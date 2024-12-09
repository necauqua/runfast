/** @param {"add"|"remove"} state */
function mkTwitchLoginCb(state) {
    return () => {
        // todo: somehow update client_id and app_host here not manually
        const client_id = 'au5rnnpr7olobf4ezr0x92oaj2bgqd';
        const app_host = 'http://localhost:8787';

        const url = new URL('https://id.twitch.tv/oauth2/authorize');
        url.searchParams.set('client_id', client_id);
        url.searchParams.set(
            'redirect_uri',
            `${app_host}/emotes/twitch-callback`
        );
        url.searchParams.set('response_type', 'code');
        url.searchParams.set('state', state); // abuse the state to send some state, instead of using it for security eh
        url.searchParams.set('scope', ''); // we dont ask anything anyway
        window.open(url, '_blank', 'popup=true');
    };
}

add_emotes.onclick = mkTwitchLoginCb('add');
remove_emotes.onclick = mkTwitchLoginCb('remove');

window.addEventListener('message', (e) => {
    // immaculate hacker prevention techniques
    if (
        e.origin === window.origin &&
        e.data?.target === 'runfast-twitch-login'
    ) {
        response.style.display = 'inline';
        response.innerText = e.data.data.message;
    }
});
