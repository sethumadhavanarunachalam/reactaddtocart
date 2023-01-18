import logo from './logo.svg';
import './App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
function App() {
  let [count,setCount]=useState(0);
 
  return (
   <div>
    <h1>welcome</h1>
    <HeaderStyle count={count} setCount={setCount} />
    <ShopCard count={count} setCount={setCount}/>
   </div>
  );
}
function HeaderStyle(count){
  let [Acount,setAcount] = useState(0);
  return <div className="header-css">
  
    <Button size="large" className="btn-clr" variant="text" color="success">Home</Button>
    <Button size="large" variant="text" color="success">About</Button>
    <Button size="large" variant="text" color="success">Search</Button>
  {/* <Badge size="large" badgeContent={count} color="primary">
</Badge> */}
<Button>
  <ShoppingCartIcon />{Acount}

</Button>
</div>
}

function ShopCard(count,setCount){
  const data = [{
    name:"Fancy Product",
    price:"$40.00 - $80.00",
    rating:"⭐⭐⭐⭐",
  },{
    name:"Special Item",
    rating:"⭐⭐⭐⭐⭐",
    price:"$18.00",
  },{
    name:"Sale Item",
    rating:"⭐⭐",
    price:"$25.00",
  },{
    name:"Popular Item",
    rating:"⭐⭐⭐⭐",
    price:"$40.00",
  },{
    name:"Fancy Product",
    price:"$40.00 - $80.00",
    rating:"⭐⭐⭐⭐",
  },{
    name:"Special Item",
    rating:"⭐⭐⭐⭐⭐",
    price:"$18.00",
  },{
    name:"Sale Item",
    rating:"⭐⭐",
    price:"$25.00",
  },{
    name:"Popular Item",
    rating:"⭐⭐⭐⭐",
    price:"$40.00",
  }
]
  
  return<div className="movie-list">
    {data.map((datas)=>(<ShopCardDesign count={count} setCount={setCount} name={datas.name} rating={datas.rating}
    price={datas.price}/>))}

  </div>
}

function ShopCardDesign(props,count,setCount){
  let [show,setShow] = useState(true);

  const CartAdd = ()=>{
    setShow(!show)
   if(show == true){
    setCount(count+1)
  }else{
     setCount(count-1)

   }
  }
  
  return<div className="card-desing">
    
  <Card sx={{ maxWidth: 345 }}>
  <CardMedia
    sx={{ height: 140 }}
    image="https://img.freepik.com/free-photo/gray-painted-background_53876-94041.jpg"
    title="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h4" component="div">
      {props.name}
    </Typography>
    <Typography gutterBottom variant="h6" component="div">
      {props.price}
    </Typography>
    <Typography gutterBottom variant="h6" component="div">
      {props.rating}
    </Typography>
  
  </CardContent>
  <CardActions>
  <Button size="large" variant="contained" onClick={()=>{CartAdd()}}>{show ? "Add to cart" : "remove from cart"}</Button>
  </CardActions>
</Card>
  
</div>
}

export default App;
