import styled from 'styled-components';

//Aqui se manejo el titulo y el texto explicativo del sitio
const Text = styled.p`
	Color: darkblue;
  	margin: 20px;
`;

const Title = styled(Text)`
	font-size: 45px;
`;

const TitleDescription = styled(Text)`
	font-size: 30px;
`;

const TitleDescription2 = styled(Text)`
	font-size: 15px;
`;

export {Title, TitleDescription, TitleDescription2}