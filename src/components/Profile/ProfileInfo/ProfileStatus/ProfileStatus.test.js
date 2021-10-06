import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="my status"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("my status");
    });
    test("span must exist after render", () => {
        const component = create(<ProfileStatus status="my status"/>);
        const root = component.root;
        const span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("input should be null", () => {
        const component = create(<ProfileStatus status="my status"/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });
    test("span exist and status in span is correct", () => {
        const component = create(<ProfileStatus status="my status"/>);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe("my status");
    });
    test("input should be displayed in editMode", () => {
        const component = create(<ProfileStatus status="my status"/>);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");
        expect(input.props.value).toBe("my status");
    })
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="my status" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.disableEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    })
})