import React, { useEffect, useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import BackButton from '../../components/BackButton';
import Spinner from '../../components/Spinner';
const ShowBook = () => {
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();   


    useEffect( () => {
        setLoading(true);
        axios
        .get(`http://localhost:5555/books/${id}`)
        .then((res) => {
            setBook(res.data);
            setLoading(false);
        })
        .catch(err=> console.log(err))
    },[])
  return (
    <div className='p-4'>
        <BackButton/>
        {loading ? (
            <Spinner/>
        ): (
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                <div className='my-4'>
                    <span className='text-xl m-4 text-gray-500'>Id</span>
                    <span>{book._id}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl m-4 text-gray-500'>Id</span>
                    <span>{book.title}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl m-4 text-gray-500'>Id</span>
                    <span>{book.author}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl m-4 text-gray-500'>Id</span>
                    <span>{book.publishYear}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl m-4 text-gray-500'>Id</span>
                    <span>{new Date(book.createdAt).toString()}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl m-4 text-gray-500'>Id</span>
                    <span>{new Date(book.updatedAt).toString()}</span>
                </div>
            </div>
        )}
    </div>
  )
}

export default ShowBook