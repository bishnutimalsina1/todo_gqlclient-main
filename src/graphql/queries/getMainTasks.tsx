import { gql } from '@apollo/client';

const GET_MAIN_TASKS = gql`
query {
	list {
		id,
		name,
		
	}
}
`;

export default GET_MAIN_TASKS;