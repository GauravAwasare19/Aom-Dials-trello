import React,{ useState } from 'react'
import { Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { v4 as uuid } from 'uuid';
import InputContainer from './components/Input/InputContainer';
import List from "./components/List/List"
import Store from "./utils/Store";
import StoreAPI from './utils/storeAPI';
import { makeStyles } from "@material-ui/styles";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import "./App.css"
import Header from './Header';
import Login from './Login';
import Signup from './Signup';


const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    overflowY: "auto",
  }
}))




function App() {
  const [data, setData] = useState(Store);
 


  const classes = useStyle();

  const addMoreCard = (title,images1,quantity,material,finishing, listId) => {
    console.log(images1,title,quantity,material,finishing, listId);
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
      images1,
      quantity,
      material,
      finishing,
     
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      //quantity,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };

  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;
    //list.quantity = quantity;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };



  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    console.log('destination', destination, 'source', source, draggableId);

    if (!destination) {
      return;
    }
    if (type === 'list') {
      const newListIds = data.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      return;
    }

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newSate = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newSate);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
    }
  };
  return (
    <>
    <Header/>
    <h2 className='dash'>Welcome to the DashBoard.</h2>
    <StoreAPI.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="app" type="list" direction="horizontal">
            {(provided) => (
              <div
                className={classes.root}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {data.listIds.map((listId, index) => {
                  const list = data.lists[listId];
                  return <List list={list} key={listId} index={index} />;
                })}
                <InputContainer type="list" />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
    </StoreAPI.Provider>
    </>
  )
}

export default App
