/**
 * 객체를 모듈화 해서 재활용하도록 함.
 */
const message = () =>{
	const name = "박찬우";
	const age=25;
	return name+"의 나이는 "+age+" 입니다. ";
};
export default message;