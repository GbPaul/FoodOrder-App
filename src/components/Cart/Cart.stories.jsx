import Cart from "./Cart"

export default {
  title: "Cart",
  component: Cart,
}

const Template = (args) => <Cart {...args} />

export const FirstStory = {
  args: {
    //👇 The args you need here will depend on your component
  },
}
