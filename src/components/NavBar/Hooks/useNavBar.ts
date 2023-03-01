import { useCallback, useContext, useEffect, useRef, useState, MutableRefObject } from 'react';
import { useRouter } from 'next/router';
import { WebContext } from '../../../context/web-context';

interface Props{
    onScroll?: Function,
    isOpen: boolean,
}
export const useNavBar = ({ isOpen, onScroll }:Props)=> {

  const [isOnTop, setIsOnTop] =  useState(false);

  return { isOnTop }
}