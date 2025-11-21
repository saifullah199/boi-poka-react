import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';

const ReadList = () => {
    const data = useLoaderData();
    const [readList, setReadList] = useState([])

    const [sort, setSort] = useState('')
    useEffect(()=>{
        const storedBookData = getStoredBook();
        const convertedStoredBooks = storedBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId));
        setReadList(myReadList)

    },[])

    const handleSort = (type) => {
        setSort(type)
        if(type === "pages"){
            const sortedByPage = [...readList].sort((a,b) => a.totalpages - b.totalpages);
            setReadList(sortedByPage)
        }
        if(type === "ratings"){
            const sortByRating =[...readList].sort((a,b) => a.totalpages -b.totalpages)
            setReadList(sortByRating)
        }
    }

    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">sort by : {sort ? sort : ""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li>
                        <a onClick={() => handleSort("pages")}>pages</a>
                    </li>
                    <li>
                        <a onClick={() => handleSort("ratings")}> ratings</a>
                    </li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book I Read {readList.length}</h2>
                    {/* map readlist and render Book component */}
                </TabPanel>
                <TabPanel>
                    <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;