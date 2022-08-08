import axios from "axios";

function get_cookie(cookie_name) {
    let results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');

    if (results)
        return (unescape(results[2]))
    else
        return null
}

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/1.0/',
    //baseURL: 'http://bowl38.ru/api/1.0/',
    withCredentials: true,
    headers: {Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM4Mjg3MzY1LCJqdGkiOiJmZjVjNzg5NGYwOTM0N2QzYTI3ZTBmNWZkZDMwODk2YiIsInVzZXJfaWQiOjF9.yhudLoafPOGdYHW7BtElbr13WE3dsGOB9h7TjHefmYw',}

})

export const newsAPI = {
    getNews(id) {
        return instance.get(`news/${id}/`).then(response => response.data)
    },

    addComment(id, message) {
        let data = new FormData()
        data.append('id', id)
        data.append('text', message)
        return instance.post('news/comment/', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': get_cookie('csrftoken')

            }
        }).then(response => response.data)
    },

    updateComment(id, message) {
        let data = new FormData
        data.append('id', id)
        data.append('text', message)
        return instance.put('news/comment/', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': get_cookie('csrftoken')
            }
        }).then(response => response.data)
    },

    deleteComment(id) {
        return instance.delete('news/comment/', {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': get_cookie('csrftoken')
            },
            params: {
                id: id
            }
        }).then(response => response.data)
    },

    addReply(id, message, reply_name) {
        let data = new FormData
        data.append('id', id)
        data.append('text', message)
        data.append('name_reply', reply_name)
        return instance.post('news/reply/', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': get_cookie('csrftoken')
            }
        }).then(response => response.data)
    },

    updateReply(id, message) {
        let data = new FormData
        data.append('id', id)
        data.append('text', message)
        return instance.put('news/reply/', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': get_cookie('csrftoken')
            }
        }).then(response => response.data)
    },

    deleteReply(id) {
        return instance.delete('news/reply/', {
            headers: {
                'X-CSRFToken': get_cookie('csrftoken')
            },
            params: {
                id: id
            }
        })
    }
}

export const tournamentAPI = {

    getTournament(id) {
        return instance.get(`tournament/${id}/`).then(response => response.data)
    },

    addPlayer(id, group) {
        let data = new FormData
        data.append('id', id)
        data.append('group', group)
        return instance.post('online_registrations/', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': get_cookie('csrftoken')

            }
        }).then(response => response.data)
    },

    deletePlayer(id) {
        return instance.delete('online_registrations', {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': get_cookie('csrftoken')
            },
            params: {
                id: id
            }
        }).then(response => response.data)
    },

    addComment(id, message) {
        let data = new FormData()
        data.append('id', id)
        data.append('text', message)
        return instance.post('tournament/comment/', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': get_cookie('csrftoken')

            }
        }).then(response => response.data)
    },

    updateComment(id, message) {
        let data = new FormData
        data.append('id', id)
        data.append('text', message)
        return instance.put('tournament/comment/', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': get_cookie('csrftoken')
            }
        }).then(response => response.data)
    },

    deleteComment(id) {
        return instance.delete('tournament/comment/', {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': get_cookie('csrftoken')
            },
            params: {
                id: id
            }
        }).then(response => response.data)
    },

    addReply(id, message, reply_name) {
        let data = new FormData
        data.append('id', id)
        data.append('text', message)
        data.append('name_reply', reply_name)
        return instance.post('tournament/reply/', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': get_cookie('csrftoken')
            }
        }).then(response => response.data)
    },

    updateReply(id, message) {
        let data = new FormData
        data.append('id', id)
        data.append('text', message)
        return instance.put('tournament/reply/', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': get_cookie('csrftoken')
            }
        }).then(response => response.data)
    },

    deleteReply(id) {
        return instance.delete('tournament/reply/', {
            headers: {
                'X-CSRFToken': get_cookie('csrftoken')
            },
            params: {
                id: id
            }
        })
    }

}