import { Button } from '@mui/material'

const ButtonGray = ({ children }) => {
	return (
		<Button
			sx={{
				display: 'inline-flex',
				padding: '22px 50px',
				alignItems: 'center',
				gap: '10',
				backgroundColor: '#6E9C9F',
				color: '#fff',
				borderRadius: '0',
				transition: 'background-color 0.5s', // Добавлено для плавного перехода
			}}
			onMouseOver={e => (e.target.style.backgroundColor = '#509498')}
			onMouseOut={e => (e.target.style.backgroundColor = '#6E9C9F')}
		>
			{children}
		</Button>
	)
}

export default ButtonGray
