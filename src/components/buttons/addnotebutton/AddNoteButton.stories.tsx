
import { ComponentMeta, ComponentStory } from "@storybook/react";
import AddNoteButton from "./AddNoteButton";


export default {
    title: 'AddNoteButton',
    component: AddNoteButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {

    },
  } as ComponentMeta<typeof AddNoteButton>;

  const Template: ComponentStory<typeof AddNoteButton> = (args) => <AddNoteButton {...args} />;

  export const Primary = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  Primary.args = {
    children: "button"
  };