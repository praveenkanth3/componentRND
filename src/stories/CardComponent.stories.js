import CardComponent from '../components/CardComponent/CardComponent.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'd',
  component: CardComponent,
  tags: ['autodocs'],
  argTypes: {
    movieDetail: 
        {
            title: 'abc',
            imdbrating: '7.309',
            language: ['nam','tam'],
            imageurl: ['https://images.shiksha.com/mediadata/images/articles/1663009156phpeKZt24.jpeg']
        },
    onClickCard: () => {console.log('clicked')}
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const card = {
  args: {
    movieDetail: 
        {
            title: 'abc',
            imdbrating: '7.309',
            language: ['nam','tam'],
            imageurl: ['https://images.shiksha.com/mediadata/images/articles/1663009156phpeKZt24.jpeg']
        },
    onClickCard: () => {console.log('clicked')}
  },
};

// export const Secondary = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };

// export default {
//     title: 'CardComponent',
//     component: CardComponent
// }

// const Template = (args) => ({
//     components: { CardComponent },
//     setup () {
//         return{ args }
//     },
//     template: '<CardComponent v-bind="args" />'
// });

// export const newl = Template.bind({})
// newl.args = {
//     movieDetail: 
//         {
//             "genre": [
//               "Drama"
//             ],
//             "imageurl": [
//               "https://m.media-amazon.com/images/M/MV5BN2UyM2U3NTctNTRlOS00Yzg5LTgxZTItNmM0MWE4ODEwMjg1XkEyXkFqcGdeQXVyNDY2MjcyOTQ@._V1_UX182_CR0,0,182,268_AL_.jpg"
//             ],
//             "imdbid": "tt9411866",
//             "imdbrating": 4.9,
//             "language": [
//               "English"
//             ],
//             "released": 2020,
//             "runtime": "85 min",
//             "synopsis": "Sally Potter's film follows a day in the life of Leo (Javier Bardem) and his daughter, Molly (Elle Fanning), as he floats through alternate lives he could have lived, leading Molly to wrestle with her own path as she considers her future.",
//             "title": "The Roads Not Taken",
//             "type": "movie"
//           },
//           onClickCard: () => {
//             console.log('dj')
//           }
// }


// export const new3 = Template.bind({})
// new3.args = {
//     placeholder: 'praveen'
// };
  