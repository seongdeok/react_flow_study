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
  
    return (
      <>
        <div
          style={{
            border: "1px solid black",
            backgroundColor: "lavender",
            borderRadius: 4,
            padding: 5
          }}
        >
          HSD
          <hr />
          <button onClick={() => setOutputCount((i) => i + 1)}>
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