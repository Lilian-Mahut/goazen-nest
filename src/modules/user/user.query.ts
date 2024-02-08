import { gql } from 'graphql-tag';

export const GET_USER_BY_ID = gql`
	query getUserById($id: Int!) {
		user(id: $id) {
			id
			name
			email
		}
	}
`;
