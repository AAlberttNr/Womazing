import { Button } from '@mui/material'

const ButtonBorder = ({ children }) => {
	return (
		<Button
			sx={{
				display: 'inline-flex',
				padding: '22px 50px',
				alignItems: 'center',
				gap: '10px',
				borderRadius: '0px',
				border: '1px solid #6E9C9F',
				transition: 'all 0.5s ease',
				// text
				color: '#6E9C9F',
				textAlign: 'center',
				fontSize: '17px',
				fontWeight: '400',
				lineHeight: '138.9%',
				letterSpacing: '0.34px',
			}}
			type='sumbit'
		>
			{children}
		</Button>
	)
}

export default ButtonBorder
