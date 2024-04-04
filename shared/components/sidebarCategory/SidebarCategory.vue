<template>
  <nav class="sidebar">
    <SidebarItem 
      v-for="category in categoryItems" 
      :key="category.name" 
      :item="category"
      :categoryName="category.name"
      @close="emit('close')"
    />
  </nav>
</template>

<script setup>
import SidebarItem from './SidebarItem.vue';

const categoryItems = [
  {
    name: 'Электроника',
    icon: 'electronic',
    items: [
      {
        name: 'Смартфоны и гаджеты',
        items: [
          {
            name: 'Смартфоны',
            items: [
              {
                name: 'Смартфоны Android',
                link: '/test'
              },
              {
                name: 'Смартфоны Apple',
                link: '/test'
              },
              {
                name: 'Смартфоны Xiomi',
                link: '/test'
              },
              {
                name: 'Смартфоны Samsung',
                link: '/test'
              },
              {
                name: 'Смартфоны Pixel',
                link: '/test'
              }
            ],
            link: '/test'
          },
          {
            name: 'Кнопочные телефоны',
            items: [],
            link: '/test'
          },
          {
            name: 'Умные часы и браслеты',
            items: [],
            link: '/test'
          },
          {
            name: 'Аксессуары для телефонов',
            items: [],
            link: '/test'
          },
          {
            name: 'Запчасти для смартфонов',
            items: [],
            link: '/test'
          },
          {
            name: 'SIM-карты',
            items: [],
            link: '/test'
          },
          {
            name: 'Чехлы',
            items: [],
            link: '/test'
          },
          {
            name: 'Защитные стёкла',
            items: [],
            link: '/test'
          }
        ],
        link: '/test'
      },
      {
        name: 'Ноутбуки',
        items: [],
        link: '/test'
      },
      {

        name: 'Телевизоры',
        items: [],
        link: '/test'
      },
      {
        name: 'Видеотехника',
        items: [],
        link: '/test'
      },
      {
        name: 'Умные колонки',
        items: [],
        link: '/test'
      },
      {
        name: 'Компьютеры и комлпектующие',
        items: [],
        link: '/test'
      },
      {
        name: 'Умные часы и браслеты',
        items: [],
        link: '/test'
      },
      {
        name: 'Планшеты',
        items: [],
        link: '/test'
      },
      {
        name: 'Наушники и аудио техника',
        items: [],
        link: '/test'
      },
      {
        name: 'Гейминг',
        items: [],
        link: '/test'
      },
      {
        name: 'Фото и видеокамеры',
        items: [],
        link: '/test'
      },
      {
        name: 'Сетевое оборудование',
        items: [],
        link: '/test'
      },
      {
        name: 'Умный дом',
        items: [],
        link: '/test'
      },
      {
        name: 'Автомобильная техника',
        items: [],
        link: '/test'
      },
      {
        name: 'Оргтехника',
        items: [],
        link: '/test'
      },
      {
        name: 'Аксессуары для техники',
        items: [],
        link: '/test'
      },
    ],
    link: ''
  },
  {
    name: 'Бытовая техника',
    icon: 'appliances',
    items: [],
    link: '/test'
  },
  {
    name: 'Авто',
    icon: 'auto',
    items: [],
    link: '/test'
  },
  {
    name: 'Строительство и ремонт',
    icon: 'construction',
    items: [],
    link: '/test'
  },
  {
    name: 'Продукты',
    icon: 'products',
    items: [],
    link: '/test'
  },
  {
    name: 'Здоровье',
    icon: 'health',
    items: [],
    link: '/test'
  },
  {
    name: 'Туристические услуги',
    icon: 'map',
    items: [],
    link: '/test'
  }
]

const emit = defineEmits(['close'])
const props = defineProps({
  categoryItems: Array
});
</script>

<style scoped>
.sidebar {
}
</style>