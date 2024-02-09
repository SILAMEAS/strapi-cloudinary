import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuButton extends Schema.Component {
  collectionName: 'components_menu_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.Text;
    type: Attribute.Enumeration<['secondary', 'primary']>;
  };
}

export interface MenuDropdown extends Schema.Component {
  collectionName: 'components_menu_dropdowns';
  info: {
    displayName: 'Dropdown';
    icon: 'arrowDown';
  };
  attributes: {
    title: Attribute.String;
    sections: Attribute.Relation<
      'menu.dropdown',
      'oneToMany',
      'api::section.section'
    >;
  };
}

export interface MenuLink extends Schema.Component {
  collectionName: 'components_menu_links';
  info: {
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.Text;
    icon: Attribute.Media;
    decription: Attribute.Text;
  };
}

export interface MenuSingleLink extends Schema.Component {
  collectionName: 'components_menu_single_links';
  info: {
    displayName: 'SingleLink';
    icon: 'link';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.Text;
  };
}

export interface ReusableCard extends Schema.Component {
  collectionName: 'components_reusable_cards';
  info: {
    displayName: 'Card';
    icon: 'folder';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    descrition: Attribute.Text;
    Img: Attribute.Media;
    price: Attribute.Decimal;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.button': MenuButton;
      'menu.dropdown': MenuDropdown;
      'menu.link': MenuLink;
      'menu.single-link': MenuSingleLink;
      'reusable.card': ReusableCard;
    }
  }
}
