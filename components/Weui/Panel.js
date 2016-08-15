'use strict'
const classNames = require('classNames')
class Panel extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            React.createElement('div', {
                className: 'weui_panel weui_panel_access'
            },
                React.createElement('div', {
                    className: 'weui_panel_hd'
                }, '图文组合列表'),
                React.createElement('div', {
                    className: 'weui_panel_bd'
                },
                    React.createElement('a', {
                        className: 'weui_media_box weui_media_appmsg',
                        href: 'javascript:void(0);'
                    },
                        React.createElement('div', {
                            className: 'weui_media_hd'
                        },
                            React.createElement('img', {
                                className: 'weui_media_appmsg_thumb',
                                src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg=='
                            })
                        ),
                        React.createElement('div', {
                            className: 'weui_media_bd'
                        },
                            React.createElement('h4', {
                                className: 'weui_media_title'
                            }, '标题一'),
                            React.createElement('p', {
                                className: 'weui_media_desc'
                            }, '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。')
                        )
                    ),
                    React.createElement('a', {
                        className: 'weui_media_box weui_media_appmsg',
                        href: 'javascript:void(0);'
                    },
                        React.createElement('div', {
                            className: 'weui_media_hd'
                        },
                            React.createElement('img', {
                                className: 'weui_media_appmsg_thumb',
                                src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg=='
                            })
                        ),
                        React.createElement('div', {
                            className: 'weui_media_bd'
                        },
                            React.createElement('h4', {
                                className: 'weui_media_title'
                            }, '标题一'),
                            React.createElement('p', {
                                className: 'weui_media_desc'
                            }, '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。')
                        )
                    ),
                    React.createElement('div', {
                        className: 'weui_media_box weui_media_text'
                    },
                        React.createElement('h4', {
                            className: 'weui_media_title'
                        }, '标题一'),
                        React.createElement('p', {
                            className: 'weui_media_desc'
                        }, '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'),
                        React.createElement('ul', {
                            className: 'weui_media_info'
                        },
                            React.createElement('li', {
                                className: 'weui_media_info_meta'
                            }, '文字来源'),
                            React.createElement('li', {
                                className: 'weui_media_info_meta'
                            }, '时间'),
                            React.createElement('li', {
                                className: 'weui_media_info_meta weui_media_info_meta_extra'
                            }, '其它信息')
                        )
                    )

                ),
                React.createElement('a', {
                    className: 'weui_panel_ft',
                    href: 'javascript:void(0);'
                }, '查看更多')
            )
        )
    }
}

module.exports = Panel