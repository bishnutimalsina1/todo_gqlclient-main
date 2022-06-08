import { gql, ApolloCache, NormalizedCacheObject } from '@apollo/client';
import {TaskFieldType} from '../../types';

const UPDATE_TASK = gql`
mutation($id: Int!, $list_id: Int!, $isDone: Boolean!, $title: String!, $description: String!) {
    updateItem(input: {
       listId: $list_id
       id: $id
       isDone: $isDone
       description: $description
       title: $title
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


export default UPDATE_TASK;

