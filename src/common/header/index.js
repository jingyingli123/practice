import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators }  from './store';
import {
	HeaderWarpper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWrapper,
	SearchInfo
} from './style';

const Header = (props) => {
		return (
			<HeaderWarpper> 
			   <Logo />
			   <Nav>
			     <NavItem className='left active'>首页</NavItem>
			     <NavItem className='left'>下载App</NavItem>
			     <NavItem className='right'>登录</NavItem>
			     <NavItem className='right'>
                     <i className="iconfont">&#xe636;</i>
			     </NavItem>
			     <SearchWrapper>
			     <CSSTransition
			     in={props.focused}
			     timeout={200}
			     classNames="slide"
			     >
			     <NavSearch
                 className= {props.focused ? 'focused': ''}
                 onFocus={props.handleInputFocus}
                 onBlur={props.handleInputBlur}
			     ></NavSearch>
			     </CSSTransition>
			     <i className= {props.focused ? 'focused iconfont': 'iconfont'}>&#xe602;</i>
			     <SearchInfo></SearchInfo>
			     </SearchWrapper>
			   </Nav>
			   <Addition>
			      <Button className='writting'>
			      <i className="iconfont">&#xe615;写文章</i>
			      </Button>
                  <Button className='reg'>注册</Button>
			   </Addition>
			</HeaderWarpper>
		)	
}
const mapStateToProps = (state) => {
   return {
      focused: state.getIn(['header', 'focused'])
   }
}
const mapDispatchToProps = (dispatch) => {
   return{
     handleInputFocus (){
        dispatch(actionCreators.searchFocus());
     },
     handleInputBlur (){
     	dispatch(actionCreators.searchBlur());
     }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);