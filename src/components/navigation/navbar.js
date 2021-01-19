import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer, makeStyles, fade
} from '@material-ui/core';
 import MenuIcon from '@material-ui/icons/Menu';
 import InputBase from '@material-ui/core/InputBase';
 
// import  SignupButton  from './SignupButton';
 // import { InvisibleButton } from '../../styledComponents/StyledHeaderFooter';



const styleSheet = makeStyles((theme) => ({
  list : {
    width : 300,
    fontFamily: 'Roboto',
    fontSize: '27px',
    borderBottom: 'none',
  },
  padding : {
    paddingRight : 30,
    cursor : "pointer",
  },

  listItem: {
    bordeBottom: '0px'
    
  },

  sideBarIcon : {
    padding : 0,
    color : "black",
    cursor : "pointer",
  },
  shadows: ["none"],

  search: {
    position: 'relative',
    textAlign: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade('#0C0C0C', 1),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'white',
    
    
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    background: 'black',
    // vertical padding + font size from searchIcon

    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },

  

}));

class ResAppBar extends Component{
  constructor(props){
    super(props);
    this.state = {drawerActivate:false, drawer:false};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentDidMount(){
    if(window.innerWidth <= 600){
      this.setState({drawerActivate:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 600){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }
    });
  }

  //Small Screens
  createDrawer(){
    return (
      <div>
        <AppBar color='white' style={{
        backdropFilter: "blur(20px) saturate(200%)",
        boxShadow: "0 0 20px rgba(0,0,0,.04)",
        background: 'rgba(250,251,255,.8)'}}>
          <Toolbar>
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <Typography color="inherit">Movie</Typography>
          
              <Typography color="inherit"></Typography>
              <MenuIcon
                className = {this.props.classes.sideBarIcon}
                onClick={()=>{this.setState({drawer:true})}}
                fontSize='large' />
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
        
         open={this.state.drawer}
         onClose={()=>{this.setState({drawer:false})}}
         onOpen={()=>{this.setState({drawer:true})}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{this.setState({drawer:false})}}
             onKeyDown={()=>{this.setState({drawer:false})}}>

            <List className = {this.props.classes.list}
            style={{
              backdropFilter: "blur(20px) saturate(200%)",
              boxShadow: "0 0 20px rgba(0,0,0,.04)",
              background: 'rgba(250,251,255,.8)'}}>
               <ListItem key = {1} button divider className = {this.props.classes.listItem} onClick={() => window.location = '/l/plans'}> Plans </ListItem>
              <ListItem key = {2} button divider className = {this.props.classes.listItem} onClick={() => window.location = '/login'}> Become a creator </ListItem>
               <ListItem key = {3} button divider className = {this.props.classes.listItem} onClick={() => window.location = '/register'}> Get Started </ListItem>
             </List>
             <div  style={{height: 30 + 'px', width: 30 + 'px', paddingLeft: 85 + 'px', bottom: 0 + 'px', position: 'absolute', paddingBottom: 10 + 'px'}}>
              Nomineers 
            </div>
         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){
    const {classes} = this.props
    return (
      <AppBar color='white' style={{
        backdropFilter: "blur(20px) saturate(200%)",
        boxShadow: "0 0 20px rgba(0,0,0,.04)",
        background: 'rgba(250,251,255,.01)',
        color: 'white'}}>
        <Toolbar>
          <Typography  style={{flexGrow:12}} color="white" width='50px'height='50px' >
          Nomineers  
          </Typography>
          <Typography  style={{flexGrow:1}} color="white" width='50px'height='50px'  >
            <div className={classes.search}     background= 'black'>
              <InputBase
                placeholder={"Search..."}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                value={this.props.input}
                onChange = {(event) => this.props.setInput(event.target.value)}
                style={{color:'white'}}
   
              />
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

ResAppBar.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withStyles(styleSheet)(ResAppBar);