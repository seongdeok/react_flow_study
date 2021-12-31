import ReactFlow, {
    addEdge,
    removeElements,
    Handle,
    Position,
    MiniMap,
    Controls,
    Background,
    useStoreActions,
    useStoreState,
    useStore,
    
    isNode,
    isEdge,
    ReactFlowProvider,
    getIncomers,
    getConnectedEdges,
    FlowElement,
    Node,
    Edge,
    Transform,
    ReactFlowProps,
    OnLoadParams
  } from "react-flow-renderer";
  import React from "react";

const CustomNode = (props) => {
    const [outputcount, setOutputCount] = React.useState(2);
    const [bgColor, setBgColor] = React.useState("lavender");
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        console.log("use Effect" + bgColor);
        setBgColor("#eee");
        document.getElementById('bg').style.backgroundColor = bgColor;
      }, [bgColor]);
    return (
      <>
        <div
          id="bg"
          style={{
            border: "1px solid black",
            backgroundColor: {bgColor},
            //backgroundColor: "lavender",
            borderRadius: 4,
            padding: 5
          }}
        >
          HSD {count}
          <hr />
          <button onClick={() => {
              setOutputCount((i) => i + 1);console.log({bgColor});setBgColor("red");setCount(count+1);
              }}>
            {" "}
            add output
          </button>
        </div>
  
        <Handle
          type={"target"}
          id={"input1"}
          position={Position.Top}
          style={{
            left: 20
          }}
        />
        <Handle
          type={"target"}
          id={"input2"}
          position={Position.Top}
          style={{ left: 40 }}
        />
        
      </>
    );
  };

  export default CustomNode