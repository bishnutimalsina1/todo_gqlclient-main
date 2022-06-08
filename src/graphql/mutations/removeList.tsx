import { gql, ApolloCache, NormalizedCacheObject } from '@apollo/client';
import {TaskFieldType} from '../../types';

const REMOVE_LIST = gql`
mutation($list_id: Int!) {
    removeList(input: { 
		  id: $list_id
    })
	{
		list {
			id
			name
		}
	}
  }
`;


export default REMOVE_LIST;

/*
mutation($list_id: Int!) {
    removeList(input: { 
		  id: $list_id
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