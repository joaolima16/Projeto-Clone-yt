import React from "react";
import  { AppBar, Toolbar, IconButton, makeStyles,  Button, ListItemIcon, Icon, Typography, ListSubheader, Grid }  from '@material-ui/core';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import RestoreIcon from '@mui/icons-material/Restore';
import { AddCircle } from "@material-ui/icons";



const useStyles= makeStyles ((theme) => ({

    root:{
      height: '100vh',
    },
    
    AppBar:{
      boxShadow: "none",
      zIndex: theme.zIndex.drawer + 1,
    },

    drawer:{
      width: 240,
      flexShrink: 0,
    },

    drawerPaper:{
      width: 240,
      borderRight: "none",
    },

    MenuIcon:{
      paddingRight: theme.spacing(5),
      paddingLeft: theme.spacing(6),
    },
    
    icons:{
      paddingRight: theme.spacing(5),
      marginLeft: "10px",
    },

    grow:{
      flexGrow: 1,
    },

    ListItemText:{
      fontSize: 14,
    },

    ListItem:{
      paddingTop: 4,
      paddingBottom: 4,
    }
    
  
  }));

  const videos = [
    {
      id: 1,
      title:'Top 10 Celtas zikas ',
      channel: 'Julio Miranda',
      views: ' 1b de visualizações',
      date: 'há 1 semana',
      avatar: '/images/celta.jpg',
      thumb: '/images/celta.jpg',
    },
    {
      id: 2,
      title:'Como clonar cartao sem ser preso',
      channel: 'Ray Ray do Vral',
      views: ' 500 mi de visualizações',
      date: 'há 1 dias',
      avatar: '/images/celta.jpg',
      thumb: '/images/clonacartao.jpg',
    },
    {
      id: 3,
      title:'Degustação de whisky',
      channel: 'Ws Bradok',
      views: ' 1b de visualizações',
      date: 'há 3 semana',
      avatar: '/images/celta.jpg',
      thumb: '/images/whisky.jpg',
    },
    {
      id: 4,
      title:'Meu Top 4 Alunos Favoritos ',
      channel: 'Julio Miranda',
      views: ' 1b de visualizações',
      date: 'há 10 dias',
      avatar: '/images/celta.jpg',
      thumb: '/images/Fotojet.jpg',
    },
    {
      id: 5,
      title:'Como Aprender Arabe Em 5 Passos',
      channel: 'Filipe Minideca',
      views: ' 4b de visualizações',
      date: 'há 6 Meses',
      avatar: '/images/celta.jpg',
      thumb: '/images/minidecaarabe.jpg',
    },
    {
      id: 6,
      title:'Como Vencer Na Vida Sendo Pobre',
      channel: 'Filipe Minideca',
      views: ' 1b de visualizações',
      date: 'há 7 dias',
      avatar: '/images/celta.jpg',
      thumb: '/images/miniminideca.jpg',
    },
    {
      id: 7,
      title:'Como Acender O Nargas No Escapamento Do Fusca(FT. Sagui)',
      channel: 'Ws Bradok',
      views: ' 2b de visualizações',
      date: 'há 1 semana',
      avatar: '/images/celta.jpg',
      thumb: '/images/sagui.jpg',
    },
    {
      id: 8,
      title:'Como Pegar Qualquer Mina Que Voce Quiser(Tecnicas De Seduçao #Aula 2) ',
      channel: 'Ws Bradok',
      views: ' 10b de visualizações',
      date: 'há 4 horas',
      avatar: '/images/celta.jpg',
      thumb: '/images/wsbradok[.jpg',
    },
    {
      id: 9,
      title:'Veja Como Eram Os Personagens De Sex Education Antes Da Fama',
      channel: 'Voce Sabia?',
      views: ' 1 mi de visualizaçoes',
      date: 'há 20 Minutos',
      avatar: '/images/celta.jpg',
      thumb: '/images/gabigol.jpg',
    },
    {
      id: 10,
      title:'Enquadros De motos (EP.112)',
      channel: 'Xracing Videos',
      views: ' 200mi de visualizações',
      date: 'há 3 dias',
      avatar: '/images/celta.jpg',
      thumb: '/images/xracing.jpg',
    },
    {
      id: 11,
      title:'Pare De Perder Cabelo, Conheça O Tratamento',
      channel: 'Zile',
      views: ' 10bi de visualizações',
      date: 'há 2 horas',
      avatar: '/images/celta.jpg',
      thumb: '/images/calvice.jpg',
    },
    {
      id: 12,
      title:'Assiti Tigresa Vip Na Escola, Fui Pego ?????? ',
      channel: 'WS bradok',
      views: ' 3b de visualizações',
      date: 'há 1 mes',
      avatar: '/images/celta.jpg',
      thumb: '/images/tigresa.jpg',
    },
  ];

function Home(){
    const classes = useStyles();
    return(
        <div className={classes.root}> 

          <AppBar 
          color="inherit" className={classes.AppBar}>
          <Toolbar>
           <IconButton
           edge="start"
           className={classes.menuIcons}
           color="inherit"
           aria-label="menu"
           >
           <MenuIcon/>
           </IconButton>
           <div className={classes.grow}/>

          <IconButton className={classes.icons} color="inherit">
            <VideoCallIcon/>
          </IconButton>

          <IconButton className={classes.icons} color="inherit">
            <AppsIcon/>
          </IconButton>

          <IconButton className={classes.icons} color="inherit">
            <MoreVertIcon/>
          </IconButton>

          <div  className={classes.grow}/>
          <Button startIcon={<AccountCircleIcon />}  variant="outlined" color="secondary">Fazer Login</Button>

          </Toolbar>
          </AppBar>

          <Box display="flex">
            <Drawer
              className={classes.drawer}
              variant ='permanent'
              classes={{
                paper: classes.drawerPaper,
              }}
              >
              <Toolbar/>
              <div className={classes.drawerContainer} >
              <List>

                <ListItem button classes ={{ root: classes.ListeItem}}>
                  <ListItemIcon>{<HomeIcon/>}</ListItemIcon>
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Inicio"}/>
                </ListItem>

                <ListItem button classes ={{ root: classes.ListeItem}}>
                  <ListItemIcon>{<WhatshotIcon/>}</ListItemIcon>
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Em Alta"}/>
                </ListItem>

                <ListItem button classes ={{ root: classes.ListeItem}}>
                  <ListItemIcon>{<RestoreIcon/>}</ListItemIcon>
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Historico"}/>
                </ListItem>
          
              
              </List>
              <Divider/>

              <ListItem button classes ={{ root: classes.ListeItem}}>
                  <ListItemIcon>{<VideoLibraryIcon/>}</ListItemIcon>
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Biblioteca"}/>
                </ListItem>

                <ListItem button classes ={{ root: classes.ListeItem}}>
                  <ListItemIcon>{<SubscriptionsIcon/>}</ListItemIcon>
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Inscrições"}/>
                </ListItem>

                <Divider/>
                <Box p={5}>
                  <Typography variant="body2">
                      Faça login Para curtir videos, comentar e se inscrever.
                  </Typography>
                    <Box mt={2}>
                    <Button startIcon={<AccountCircleIcon />}  variant="outlined" color="secondary">Fazer Login</Button>
                </Box>
                </Box>

                <Divider/>

                <ListItem button classes ={{ root: classes.ListeItem}}>
                  <ListItemIcon>{<AddCircle/>}</ListItemIcon>
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Musica"}/>
                </ListItem>

                <ListItem button classes ={{ root: classes.ListeItem}}>
                  <ListItemIcon>{<AddCircle/>}</ListItemIcon>
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Desporto"}/>
                </ListItem>

                <ListItem button classes ={{ root: classes.ListeItem}}>
                  <ListItemIcon>{<AddCircle/>}</ListItemIcon>
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Video jogos"}/>
                </ListItem>

                <ListItem button classes ={{ root: classes.ListeItem}}>
                  <ListItemIcon>{<AddCircle/>}</ListItemIcon>
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Filmes"}/>
                </ListItem>

                <ListItem button classes ={{ root: classes.ListeItem}}>
                  <ListItemIcon>{<AddCircle/>}</ListItemIcon>
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Filmes"}/>
                </ListItem>

                <ListItem button classes ={{ root: classes.ListeItem}}>
                  <ListItemIcon>{<AddCircle/>}</ListItemIcon>
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Noticias"}/>
                </ListItem>

                <ListItem button classes ={{ root: classes.ListeItem}}>
                  <ListItemIcon>{<AddCircle/>}</ListItemIcon>
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Em direto"}/>
                </ListItem>

                <ListItem button classes ={{ root: classes.ListeItem}}>
                  <ListItemIcon>{<AddCircle/>}</ListItemIcon>
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Aprendizagem"}/>
                </ListItem>

                <ListItem button classes ={{ root: classes.ListeItem}}>
                  <ListItemIcon>{<AddCircle/>}</ListItemIcon>
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Em foco"}/>
                </ListItem>

                <ListItem button classes ={{ root: classes.ListeItem}}>
                  <ListItemIcon>{<AddCircle/>}</ListItemIcon>
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Video 360"}/>
                </ListItem>
            
            </div>
          </Drawer>
          

          <Box p={8}>
          <Toolbar />
          <Typography
            variant='h5'
            color='textPrimary'
            style={{ fontWeight: 600 }}
          >
            Recomendados
          </Typography>

          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '300px',  height:'150px' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          </Box>
          </Box>
          </div>
        
    )
}

export default Home;