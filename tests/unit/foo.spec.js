import { shallowMount } from "@vue/test-utils";
import Foo from "@/components/other/Foo.vue";

describe("Foo", () => {
  it("renders a message and responds correctly to user input", () => {
    const wrapper = shallowMount(Foo);
    wrapper.setData({
      message: "Hello World",
      username: ""
    });

    // see if the message renders
    expect(wrapper.find(".message").text()).toEqual("Hello World");

    // assert the error is rendered
    expect(wrapper.find(".error").exists()).toBeTruthy();

    // update the `username` and assert error is no longer rendered
    wrapper.setData({ username: "Lachlan" });
    expect(wrapper.find(".error").exists()).toBeFalsy();
  });
});
