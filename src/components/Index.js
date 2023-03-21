import React from "react";

const Index = () => {
  // JSON data
  const inputs = [
    {
      value: "input",
      label: "input",
    },
     {
      value: "radio",
      label: "radio",
    },
      {
      value: "checkbox",
      label: "checkbox",
    },
     {
      value: "select",
      label: "select",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          borderRadius: 3,
          padding: 24,
          border: "1px solid rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* card title */}
        <div style={{ fontSize: "25px" }}>Create Form</div>

        {/* Label input */}
        <div style={{ fontSize: "15px", padding: "10px" }}>
          <div style={{ marginRight: "30%", paddingBottom: "10px" }}>
            Enter Input Label
          </div>
          <div style={{borderRadius: 3}}>
            <input type="text" placeholder="Enter input label..." />
          </div>

          <div style={{ fontSize: "15px", padding: "10px" }}>
            <select style={{marginRight: '80px', borderRadius: 3}}>

                {
                    inputs?.map((item, index) => (
               
              <option value={item?.value}>{item?.label}</option>
                    ) )
                }
              
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
