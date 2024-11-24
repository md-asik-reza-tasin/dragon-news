import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { data } from "react-router-dom";
import auth from "../firebase.config";

export const AuthContextApi = createContext();

export default function AuthContext({ children }) {
  const [allData, setAllData] = useState([]);
  const [singleCategory, setSingleCategory] = useState([]);
  const [category, setCategory] = useState([]);
  const [a, setA] = useState([]);
  const [userLogIn, setUserLogIn] = useState(null);
  const [loading, setLoading] = useState(true);
  const [singleData, setSingleData] = useState([]);
  const [news, setNews] = useState([]);
  const [all, setAll] = useState([]);
  const [cut, setCut] = useState(4);

  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, [singleData]);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => {
        setAll(data);
        setNews(data.slice(0, cut));
      });
  }, [cut]);

  const handleCategories = (id) => {
    if (id > 0) {
      const newData = allData.filter((a) => a.category_id === id);
      const singleC = category.filter((c) => c.id === id);
      setSingleCategory(newData);
      setA(singleC);
    } else {
      const zero = [...allData];
      setSingleCategory(zero);
    }
  };

  //REGISTER USER

  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //LOG IN USER

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //SIGN OUT USER

  const logOut = () => {
    return signOut(auth);
  };

  //SIGN IN WITH GOOOOOOOOOOOOOGLE

  const createUserByGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //OBSERVER

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserLogIn(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  //DETAIL NEWS

  const handleReadMore = (id) => {
    if (allData.length) {
      console.log("all data:", allData);
      const blankArray = [];
      console.log(allData);
      const detail = allData.find((single) => single._id === id);
      blankArray.push(detail);
      console.log(blankArray);
      setSingleData(blankArray);
    }
  };

  const info = {
    handleCategories,
    singleCategory,
    a,
    createNewUser,
    logIn,
    userLogIn,
    logOut,
    loading,
    createUserByGoogle,
    handleReadMore,
    singleData,
    news,
    cut,
    setCut
  };

  return (
    <AuthContextApi.Provider value={info}>{children}</AuthContextApi.Provider>
  );
}
