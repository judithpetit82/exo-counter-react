import { useState } from "react";

function Counter() {
    const [count1, setCount1] = useState(0);
    
    return (
        
            <div>
                <button
                    onClick={() => {
                        setCount1(count1 + 1);
                    }}
                >
                    +1
                </button>
                {count1}
                <button
                    onClick={() => {
                        setCount1(count1 - 1);
                    }}
                >
                    -1
                </button>
            </div>);
            }

    export default Counter;
