import {Button} from '@hilla/react-components/Button.js';
import {Notification} from '@hilla/react-components/Notification.js';
import {TextField} from '@hilla/react-components/TextField.js';
import {Component2ReactEndpoint} from 'Frontend/generated/endpoints';
import {useState} from 'react';

export default function Component2ReactView() {
    const [name, setName] = useState('');

    return (
        <>
            <h2>Component 2</h2>
            <section className="flex p-m gap-m items-end">
                <TextField
                    label="Your name"
                    onValueChanged={(e) => {
                        setName(e.detail.value);
                    }}
                />
                <Button
                    onClick={async () => {
                        const serverResponse = await Component2ReactEndpoint.sayHello(name);
                        Notification.show(serverResponse);
                    }}
                >
                    Say hello
                </Button>
            </section>
        </>
    );
}
