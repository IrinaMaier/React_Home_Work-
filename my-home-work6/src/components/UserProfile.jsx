import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/UserProfile.module.css'

const UserProfile = () => {
    const[user, setUser]=useState(null);
    const[loading, setLoading]=useState(true);
    const[error, setError]=useState(null);


    const fetchUser=async ()=> {
        try{
            setLoading(true)
            setError(null)
            
            const response =await axios.get('https://randomuser.me/api')

            const userData=response.data.results[0];
            setUser(userData);
        }catch (err){
            setError('загрузка данных не удалась')
            console.error(err)
        }finally{ 
        setLoading(false);
        }
    };

    useEffect(()=>{
        fetchUser();
    },[])
    
 if(loading){
    return <div className={styles.loading}>Loading..</div>
 }
    if(error){
        return <div className={styles.error}>{error}</div>
    }
    return(
        <div className={styles.profileContainer}>
            <div className={styles.profileCard}>
                
        <img src={user.picture.large} 
        alt={`${user.name.first} ${user.name.last}`}
        className={styles.profileImage}/>
                <h1 className={styles.profileName}>
                    {user.name.first} {user.name.last}
                </h1>
                <p className={styles.profileInfo}>
                    <strong>Email:</strong> {user.email}
                </p>
                <p className={styles.profileInfo}>
                    <strong>Phone:</strong> {user.phone}
                </p>
                <button 
                    onClick={fetchUser} 
                    className={styles.refreshButton}
                >
                    Load New User
                </button>
            </div>
        </div>
    );
};
    





export default UserProfile