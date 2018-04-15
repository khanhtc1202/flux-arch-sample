export type TypeAction = {
    type: "TYPE";
    text: string;
};

export const type = (text: string): TypeAction => {
    return {
        type: "TYPE",
        text
    };
};
