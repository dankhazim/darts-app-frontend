import * as layoutConstants from 'appConstants';
import logo from 'assets/images/logo-light.png';
import logoSmLight from 'assets/images/logo_sm.png';
import logoSmDark from 'assets/images/logo_sm_dark.png';
import userImage from 'assets/images/users/avatar-1.jpg';
import classNames from 'classnames';
import { useRedux, useToggle, useViewport } from 'hooks';
import { Link } from 'react-router-dom';
import { changeSidebarType } from 'redux/actions';
import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';
import { notifications, profileMenus } from './data';

type TopbarProps = {
  hideLogo?: boolean;
  navCssClasses?: string;
  openLeftMenuCallBack?: () => void;
  topbarDark?: boolean;
};

const Topbar = ({
  hideLogo,
  navCssClasses,
  openLeftMenuCallBack,
  topbarDark
}: TopbarProps) => {
  const { dispatch, appSelector } = useRedux();
  const { width } = useViewport();
  const [, toggleMenu] = useToggle();

  const containerCssClasses = !hideLogo ? 'container-fluid' : '';

  const { layoutType, leftSideBarType } = appSelector(state => ({
    layoutType: state.Layout.layoutType,
    leftSideBarType: state.Layout.leftSideBarType
  }));

  /**
   * Toggle the leftmenu when having mobile screen
   */
  const handleLeftMenuCallBack = () => {
    toggleMenu();
    if (openLeftMenuCallBack) openLeftMenuCallBack();

    switch (layoutType) {
      case layoutConstants.LayoutTypes.LAYOUT_VERTICAL:
        if (width >= 768) {
          if (leftSideBarType === 'fixed' || leftSideBarType === 'scrollable')
            dispatch(
              changeSidebarType(
                layoutConstants.SideBarWidth.LEFT_SIDEBAR_TYPE_CONDENSED
              )
            );
          if (leftSideBarType === 'condensed')
            dispatch(
              changeSidebarType(
                layoutConstants.SideBarWidth.LEFT_SIDEBAR_TYPE_FIXED
              )
            );
        }
        break;

      default:
        break;
    }
  };

  return (
    <div className={classNames('navbar-custom', navCssClasses)}>
      <div className={containerCssClasses}>
        {!hideLogo && (
          <Link to="/" className="topnav-logo">
            <span className="topnav-logo-lg">
              <img src={logo} alt="logo" height="16" />
            </span>
            <span className="topnav-logo-sm">
              <img
                src={topbarDark ? logoSmLight : logoSmDark}
                alt="logo"
                height="16"
              />
            </span>
          </Link>
        )}

        <ul className="list-unstyled topbar-menu float-end mb-0">
          <li className="dropdown notification-list">
            <NotificationDropdown notifications={notifications} />
          </li>
          <li className="dropdown notification-list">
            <ProfileDropdown
              userImage={userImage}
              menuItems={profileMenus}
              username={'Dominic Keller'}
              userTitle={'Founder'}
            />
          </li>
        </ul>

        {/* toggle for vertical layout */}
        {layoutType === layoutConstants.LayoutTypes.LAYOUT_VERTICAL && (
          <button
            className="button-menu-mobile open-left"
            onClick={handleLeftMenuCallBack}
          >
            <i className="mdi mdi-menu" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Topbar;
