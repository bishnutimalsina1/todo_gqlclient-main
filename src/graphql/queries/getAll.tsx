import { gql } from '@apollo/client';

const GET_ALL = gql`
query {
	a:list
	{
		id
		name
		itemDatas
		{
			id
			title
			description
			isDone
		}
	}
}
`;

export default GET_ALL;