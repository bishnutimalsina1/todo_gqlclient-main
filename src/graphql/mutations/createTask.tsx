import { gql, ApolloCache, NormalizedCacheObject } from '@apollo/client';
import {TaskFieldType} from '../../types';

const CREATE_TASK = gql`
  mutation($title: String!, $parent_id: Int!, $description: String!) {
    addItem(input: { 
      title: $title
      description: $description
		  isDone: false
		  listId: $parent_id
    })
    {
      data
      {
        id
        title
      }
    }
  }
`;


export default CREATE_TASK;

/*
mutation {
	addItem(input: {
		title: "Prepare the backend"
		description: "Run the server"
		isDone: false
		listId: 1
	})
	{
		data
		{
			id
			title
		}
	}
}

*/