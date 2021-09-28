
 const tokens = {
    admin: {
        token: 'admin-token'
    },
    editor: {
        token: 'editor-token'
    },
    visitor: {
        token: 'visitor-token'
    }
}

const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: 'super administrator',
        avatar: '',
        name: 'Super Admin'
    },
    'editor-token': {
        roles: ['editor'],
        introduction: 'an editor',
        avatar: '',
        name: 'Normal Editor'
    },
    'visitor-token':{
        roles: ['visitor'],
        introduction: 'a visitor',
        avatar: '',
        name: 'Normal Editor'
    }
}

module.exports = {
    tokens,users
}
