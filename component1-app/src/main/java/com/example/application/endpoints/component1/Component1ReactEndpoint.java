package com.example.application.endpoints.component1;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import dev.hilla.Nonnull;

@Endpoint
@AnonymousAllowed
public class Component1ReactEndpoint {

    @Nonnull
    public String sayHello(@Nonnull String name) {
        if (name.isEmpty()) {
            return "Hello stranger (component1-backend)";
        } else {
            return "Hello " + name+ " (component1-backend)";
        }
    }
}