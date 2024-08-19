<template>
  <div class="sidebar__list">
    <nav class="sidebar">
      <SidebarItem
        v-for="(category, i) in categoryItems"
        :key="i"
        :item="category"
        @click="onSelectParentCategory($event, categoryItems)"
      />
    </nav>
    <nav class="sidebar" v-for="(child, i) in childCategories" :key="i">
      <SidebarItem
        v-for="(childItem, index) in child.childItems"
        :key="index"
        :item="childItem"
        @click="onSelectChildCategory($event, child.childItems, i)"
      />
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SidebarItem from './SidebarItem.vue'

const childCategories = ref([])

const categoryItems = ref([
  {
    categoryName: 'Электроника',
    icon: 'mobile',
    childMarketplaceCategories: [
      {
        categoryName: 'Смартфоны и гаджеты',
        childMarketplaceCategories: [
          {
            categoryName: 'Смартфоны',
            childMarketplaceCategories: [
              {
                categoryName: 'Смартфоны Android',
                link: '/test',
              },
              {
                categoryName: 'Смартфоны Apple',
                link: '/test',
              },
              {
                categoryName: 'Смартфоны Xiomi',
                link: '/test',
              },
              {
                categoryName: 'Смартфоны Samsung',
                link: '/test',
              },
              {
                categoryName: 'Смартфоны Pixel',
                link: '/test',
              },
            ],
            link: '/test',
          },
          {
            categoryName: 'Кнопочные телефоны',
            childMarketplaceCategories: [],
            link: '/test',
          },
          {
            categoryName: 'Умные часы и браслеты',
            childMarketplaceCategories: [],
            link: '/test',
          },
          {
            categoryName: 'Аксессуары для телефонов',
            childMarketplaceCategories: [],
            link: '/test',
          },
          {
            categoryName: 'Запчасти для смартфонов',
            childMarketplaceCategories: [],
            link: '/test',
          },
          {
            categoryName: 'SIM-карты',
            childMarketplaceCategories: [],
            link: '/test',
          },
          {
            categoryName: 'Чехлы',
            childMarketplaceCategories: [],
            link: '/test',
          },
          {
            categoryName: 'Защитные стёкла',
            childMarketplaceCategories: [],
            link: '/test',
          },
        ],
        link: '/test',
      },
      {
        categoryName: 'Ноутбуки',
        childMarketplaceCategories: [
          {
            categoryName: 'Macbook',
            childMarketplaceCategories: [],
            link: '/test',
          },
          {
            categoryName: 'Dell',
            childMarketplaceCategories: [],
            link: '/test',
          },
          {
            categoryName: 'Redmi-Book',
            childMarketplaceCategories: [],
            link: '/test',
          },
        ],
        link: '/test',
      },
      {
        categoryName: 'Телевизоры',
        childMarketplaceCategories: [],
        link: '/test',
      },
      {
        categoryName: 'Видеотехника',
        childMarketplaceCategories: [],
        link: '/test',
      },
      {
        categoryName: 'Умные колонки',
        childMarketplaceCategories: [],
        link: '/test',
      },
      {
        categoryName: 'Компьютеры и комлпектующие',
        childMarketplaceCategories: [],
        link: '/test',
      },
      {
        categoryName: 'Умные часы и браслеты',
        childMarketplaceCategories: [],
        link: '/test',
      },
      {
        categoryName: 'Планшеты',
        childMarketplaceCategories: [],
        link: '/test',
      },
      {
        categoryName: 'Наушники и аудио техника',
        childMarketplaceCategories: [],
        link: '/test',
      },
      {
        categoryName: 'Гейминг',
        childMarketplaceCategories: [],
        link: '/test',
      },
      {
        categoryName: 'Фото и видеокамеры',
        childMarketplaceCategories: [],
        link: '/test',
      },
      {
        categoryName: 'Сетевое оборудование',
        childMarketplaceCategories: [],
        link: '/test',
      },
      {
        categoryName: 'Умный дом',
        childMarketplaceCategories: [],
        link: '/test',
      },
      {
        categoryName: 'Автомобильная техника',
        childMarketplaceCategories: [],
        link: '/test',
      },
      {
        categoryName: 'Оргтехника',
        childMarketplaceCategories: [],
        link: '/test',
      },
      {
        categoryName: 'Аксессуары для техники',
        childMarketplaceCategories: [],
        link: '/test',
      },
    ],
    link: '',
  },
  {
    categoryName: 'Бытовая техника',
    icon: 'washing-machine',
    childMarketplaceCategories: [
      {
        categoryName: 'Автомобильная техника',
        childMarketplaceCategories: [],
        link: '/test',
      },
      {
        categoryName: 'Оргтехника',
        childMarketplaceCategories: [],
        link: '/test',
      },
      {
        categoryName: 'Аксессуары для техники',
        childMarketplaceCategories: [],
        link: '/test',
      },
    ],
    link: '/test',
  },
  {
    categoryName: 'Авто',
    icon: 'car',
    childMarketplaceCategories: [],
    link: '/test',
  },
  {
    categoryName: 'Строительство и ремонт',
    icon: 'charts',
    childMarketplaceCategories: [],
    link: '/test',
  },
  {
    categoryName: 'Продукты',
    icon: 'milk',
    childMarketplaceCategories: [],
    link: '/test',
  },
  {
    categoryName: 'Здоровье',
    icon: 'heart-beat',
    childMarketplaceCategories: [],
    link: '/test',
  },
  {
    categoryName: 'Туристические услуги',
    icon: 'map',
    childMarketplaceCategories: [],
    link: '/test',
  },
])

const onSelectParentCategory = (selectedCategory, categories) => {
  setActiveState(selectedCategory, categories)
  if (selectedCategory.childMarketplaceCategories?.length) {
    childCategories.value = [
      {
        childItems: selectedCategory.childMarketplaceCategories,
      },
    ]
  }
}

const onSelectChildCategory = (
  selectedChild,
  childItems,
  currentSidebarIndex,
) => {
  childCategories.value = childCategories.value.filter(
    (_, subIndex) => subIndex <= currentSidebarIndex,
  )
  setActiveState(selectedChild, childItems)
  if (selectedChild.childMarketplaceCategories?.length) {
    childCategories.value.push({
      childItems: selectedChild.childMarketplaceCategories,
    })
  }
}

const setActiveState = (selectedItem, categories) => {
  categories.map(category => {
    category.isActive = false
    return category
  })
  selectedItem.isActive = true
}
</script>

<style lang="scss" scoped>
.sidebar {
  min-width: 265px;
  &__list {
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    background: #fff;
    width: 100%;
    height: 100vh;
    gap: 8px;
  }
}
</style>
