import { useState } from "react";

function useScrollTop() {
    const [scrollTop, setScrollTop] = useState(0);
    const onScroll = (event) => setScrollTop(event.target.scrollTop);
    return [scrollTop, { onScroll }];
}