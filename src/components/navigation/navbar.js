import React from 'react';
import { makeStyles, fade, } from '@material-ui/core/styles';
import { Typography,  AppBar, Toolbar } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles({
	
	navbarContainer: {
		widows: '100vh',
		backgroundColor: 'white',
		backdropFilter: "blur(20px) saturate(200%)",
		boxShadow: "0 0 20px rgba(0,0,0,.04)",
		background: 'rgba(250,251,255,.01)',
		position: 'fixed',
		zIndex: '100',
		width: '100%'

	},
	
  search: {
    position: 'relative',
    textAlign: 'right',
    backgroundColor: fade('#0C0C0C', 1),
    '&:hover': {
      backgroundColor: fade('#FFFFF', 0.25),
    },
    marginLeft: 0,
    width: '100%',
  },
  inputRoot: {
    color: 'white',
    
	}

});


const Menubar = (props) => {
	const classes = useStyles();

	return (
	  <AppBar style={{
			backdropFilter: "blur(20px) saturate(200%)",
			boxShadow: "0 0 20px rgba(0,0,0,.04)",
			background: 'rgba(250,251,255,.01)',
			}}>
			<Toolbar>
				<Typography  style={{flexGrow:12}}  width='50px'height='50px' >
				Nomineers  
				</Typography>
				<Typography  style={{flexGrow:1}}  width='50px'height='50px'  >
					<div className={classes.search}     background= 'black'>
						<InputBase
							placeholder={"Search..."}
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							value={props.input}
							onChange = {(event) => props.setInput(event.target.value)}
							style={{color:'white'}}
 
						/>
					</div>
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Menubar;