import {Button} from '@hilla/react-components/Button.js';
import {Notification} from '@hilla/react-components/Notification.js';
import {TextField} from '@hilla/react-components/TextField.js';
import {Component1ReactEndpoint} from 'Frontend/generated/endpoints';
import {useState} from 'react';

type Props = {
    person: Person | undefined
}
type Person = {
    name: string
}

export default function Component1ReactView({ person }: Props) {
    const [name, setName] = useState('');

    return (
        <>
            <h2>Component 1</h2>
            <section className="flex p-m gap-m items-end">
                <TextField
                    label="Your name"
                    value={person?.name}
                    onValueChanged={(e) => {
                        setName(e.detail.value);
                    }}
                />
                <Button
                    onClick={async () => {
                        const serverResponse = await Component1ReactEndpoint.sayHello(name);
                        Notification.show(serverResponse);
                    }}
                >
                    Say hello
                </Button>
            </section>
        </>
    );
}
