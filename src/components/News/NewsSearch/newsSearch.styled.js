import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';

export const InputStyled = styled(InputBase)({
  borderRadius: '20px',
});

export const FormSearch = styled(Paper)({
  background: '#FFFFFF',
  borderRadius: '20px',
  boxShadow: '7px 4px 14px rgba(49, 21, 4, 0.07)',
  // border: 'none',
  marginBottom: '60px',
  marginRight: 'auto',
  marginLeft: 'auto',
});

// export const InputBase = styled.input`
//   width: 400px;
//   height:30px;
//   borderradius: 50';
//   border: 2px solid red

//   padding: 0 10px 0 10px;
//   marginright: 15px;
//   margintop: 30px;s
// `;

// export const ButtonSubmit = styled.button`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;

//   width: 100px;
//   height: 33px;
//   margin-top: 30px;

//   font-size: 15px;
//   font-family: inherit;
//   cursor: pointer;
// `;

// export default newsSearch.styled;
