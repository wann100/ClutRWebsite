<template lang="html">
    <div class="channels__container">
        <h2 class="listings_header" style="color:white;"> Channels <i class="add icon add_channel" @click="openChannelModal"></i></h2>
        <div class="ui raised padded channels__list">
            <ul>
                <li class="channels__item"
                    v-for="channel in channels"
                    :key="channel.id"
                    :class="{'is_active': setChannelActive(channel), 'has_unread': getNotification(channel) > 0}"
                    @click="changeChannel(channel)">
                    # {{ channel.name }}
                    <div class="ui label unread channel__count" v-if="getNotification(channel) > 0 && (channel.id !== currentChannel.id)">
                        {{ getNotification(channel) }}
                    </div>
                </li>
            </ul>
        </div>

        <!-- Modal -->
        <div class="ui basic modal" id="channelModal">
            <div class="ui icon header">
                Add new channel
            </div>

            <div class="content">
                <div class="ui inverted form" :class="{'error': hasErrors}">
                    <div class="field">
                        <label for="new_channel">Channel name</label>
                        <input type="text" name="new_channel" id="new_channel" v-model="new_channel">
                    </div>
                </div>

                <div class="ui error message" v-if="hasErrors">
                    <p v-for="error in errors">
                        {{ error }}
                    </p>
                </div>


            </div>

            <div class="actions">
                <div class="ui red basic cancel inverted button" >
                    <i class="remove icon"></i> Cancel
                </div>
                <div class="ui green inverted button" @click="addChannel">
                    <i class="checkmark icon"></i> Add
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from "firebase/app";
import "firebase/storage";
import mixin from '../mixins'

export default {
    name: 'channels',
    data() {
        return {
            new_channel: '',
            errors: [],
            channelsRef: firebase.database().ref('channels'),
            messagesRef: firebase.database().ref('messages'),
            channels: [],
            firstLoad: true,
            notifCount: [],
            channel: null
        }
    },
    mixins: [mixin],
    watch: {
        isPrivate() {
            if (this.isPrivate) {
                this.resetNotification()
            }
        }
    },
    computed: {
        ...mapGetters(['currentChannel', 'isPrivate']),
        hasErrors() {
            return this.errors.length > 0
        }
    },
    mounted() {
        this.addListeners()
    },
    methods: {
        addListeners() {
            this.channelsRef.on('child_added', (snap) => {
                this.channels.push(snap.val())

                if (this.firstLoad && this.channels.length > 0) {
                    this.$store.dispatch('setCurrentChannel', this.channels[0])
                    this.channel = this.channels[0]
                }

                this.firstLoad = false

                // get notification count
                this.addCountListener(snap.key)
            })
        },
        addCountListener(channelId) {
            this.messagesRef.child(channelId).on('value', (snap) => {
                this.handleNotifications(channelId, this.currentChannel.id, this.notifCount, snap)
            })
        },
        getNotification(channel) {
            let notif = 0
            this.notifCount.forEach((el) => {
                if (el.id === channel.id) {
                    notif = el.notif
                }
            })
            return notif
        },
        openChannelModal() {
            /* global $ */
            /* eslint no-undef: "error" */
            $('#channelModal').modal('show')
        },
        addChannel() {
            const key = this.channelsRef.push().key

            const newChannel = { id: key, name: this.new_channel }
            this.channelsRef.child(key).update(newChannel).then(() => {
                this.new_channel = ''
                /* global $ */
                /* eslint no-undef: "error" */
                $('#channelModal').modal('hide')
            }).catch((error) => {
                this.errors.push(error.message)
            })
        },
        changeChannel(channel) {
            this.resetNotification()
            this.$store.dispatch('setPrivate', false)
            this.$store.dispatch('setCurrentChannel', channel)
            this.channel = channel
        },
        resetNotification() {
            const index = this.notifCount.findIndex(el => el.id === this.channel.id)
            if (index !== -1) {
                this.notifCount[index].total = this.notifCount[index].lastKnowTotal
                this.notifCount[index].notif = 0
            }
        },
        detachListeners() {
            this.channelsRef.off()
            this.channels.forEach((el) => {
                this.messagesRef.child(el.id).off()
            })
        },
        setChannelActive(channel) {
            return channel.id === this.currentChannel.id
        }
    },
    beforeDestroy() {
        this.detachListeners()
    }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';

    .channels__list {
        min-height: 100px;
        max-height: 300px !important;
        overflow-y: auto !important;
        color: $color_shady_lady;;
    }

    .channels__container ul {
        margin: 0;
        padding: 0;
    }

    .channels__item {
        list-style: none;
        cursor: pointer;
        line-height: 30px;
        border-radius: 2px;
        padding-left: 12px;
        font-size: 1.1em;
        margin: 1px 0;
    }

    .channel__count {
        float: right;
    }

    .channels__item:hover {
        background-color: $color_smalt_blue;
    }

    .add_channel {
        cursor: pointer;
        color: $white;
        position: absolute;
        right: -65%;
        opacity: 0.6;
        top: 5%;
        display: inline-block;
    }
    .add_channel:hover {
        color: $white;
    }
</style>
