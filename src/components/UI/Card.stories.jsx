import Card from "./Card"

export default {
  title: "General/Card",
  component: Card,
}

const Template = (args) => <Card {...args} />

export const DefaultStory = {
  args: {},
}
