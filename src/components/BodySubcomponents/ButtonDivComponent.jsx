import ButtonComponent from "./ButtonDivSubcomponents/ButtonComponent"
function ButtonDivComponent(){
    return (
    <div className="buttons">
      <ButtonComponent text = {'Google Search'} />  
      <ButtonComponent text = {'Feeling Lucky'} />
    </div>
    )
}

export default ButtonDivComponent