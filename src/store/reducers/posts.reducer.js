const initialState = {
  items: [
    {
      name: 'name 1',
      id: '1',
      text: 'some text 1',
      tags: ['test']
    },
    {
      name: 'name 2',
      id: '2',
      text: 'some text 2',
      tags: []
    },
    {
      name: 'name 3',
      id: '3',
      text: 'some text 3',
      tags: ['test1']
    },
    {
      name: 'name 4',
      id: '4',
      text: 'some text 4',
      tags: ['test4']
    },
    {
      name: 'name 5',
      id: '5',
      text: 'some text',
      tags: ['test', 'test4']
    }
  ],
  loading: false,
  selectedTags: []
};

export default (state = initialState, action ) => state;
