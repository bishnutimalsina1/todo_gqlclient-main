import { gql, ApolloCache, NormalizedCacheObject } from '@apollo/client';
import {TaskFieldType} from '../../types';

const REMOVE_TASK = gql`
  mutation($list_id: Int!, $id: Int!) {
    removeItem(input: { 
		  listId: $list_id
          id: $id
          isDone: false
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


export default REMOVE_TASK;

/*
mutation {
 removeItem(input: {
	listId: 1
	id: 1
	isDone: false
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