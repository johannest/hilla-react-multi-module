import { Button } from '@hilla/react-components/Button.js';
import { Notification } from '@hilla/react-components/Notification.js';
import { TextField } from '@hilla/react-components/TextField.js';
import {Component1ReactEndpoint, Component2ReactEndpoint, HelloReactEndpoint} from 'Frontend/generated/endpoints';
import { useState } from 'react';
import { usePerson } from "../../PersonContext";

export default function HelloReactView() {
  const [name, setName] = useState('');
  const {getPerson, setPerson} = usePerson();

  return (
    <>
      <section className="flex p-m gap-m items-end">
        <TextField
          label="Your name"
          onValueChanged={(e) => {
            setName(e.detail.value);
          }}
        />
        <Button
          onClick={async () => {
            const serverResponse = await HelloReactEndpoint.sayHello(name);
            Notification.show(serverResponse);
          }}
        >
          Say hello
        </Button>
        <Button
          onClick={async () => {
            const serverResponse = await Component1ReactEndpoint.sayHello(name);
            Notification.show(serverResponse);
          }}
        >
          Say hello with Component 1
        </Button>
        <Button
          onClick={async () => {
            const serverResponse = await Component2ReactEndpoint.sayHello(name);
            Notification.show(serverResponse);
          }}
        >
          Say hello with Component 2
        </Button>
        <Button onClick={() => {
            setPerson({name: name})
        }}>
          Send text to component 1 props
        </Button>
      </section>
    </>
  );
}
