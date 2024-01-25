#include<stdio.h>
#include<stdlib.h>
#include<string.h>

struct IceCream {
   char name[50];
   float price;
   int quantity;
};

void displayList(struct IceCream icecream[], int size) {
   printf("\n-----------------------\n");
   printf("Ice Cream List\n");
   printf("-----------------------\n");
   printf("Name\t\tPrice\t\tQuantity\n");
   printf("-----------------------\n");
   for(int i=0; i<size; i++) {
      printf("%-20s $%.2f\t%d\n", icecream[i].name, icecream[i].price, icecream[i].quantity);
   }
   printf("-----------------------\n");
}

void addNewList(struct IceCream icecream[], int *size) {
   printf("\n-----------------------\n");
   printf("Add New Ice Cream List\n");
   printf("-----------------------\n");
   printf("Enter Ice Cream Name: ");
   scanf("%s", icecream[*size].name);
   printf("Enter Ice Cream Price: $");
   scanf("%f", &icecream[*size].price);
   printf("Enter Ice Cream Quantity: ");
   scanf("%d", &icecream[*size].quantity);
   (*size)++;
}

void addNewData(struct IceCream icecream[], int size) {
   printf("\n-----------------------\n");
   printf("Add New Ice Cream Data\n");
   printf("-----------------------\n");
   printf("Enter Ice Cream Name to Add Data: ");
   char name[50];
   scanf("%s", name);
   for(int i=0; i<size; i++) {
      if(strcmp(icecream[i].name, name) == 0) {
         printf("Enter Ice Cream Quantity to Add: ");
         int quantity;
         scanf("%d", &quantity);
         icecream[i].quantity += quantity;
         printf("Data Added Successfully!\n");
         return;
      }
   }
   printf("Ice Cream Not Found!\n");
}

void updateRecord(struct IceCream icecream[], int size) {
   printf("\n-----------------------\n");
   printf("Update Ice Cream Record\n");
   printf("-----------------------\n");
   printf("Enter Ice Cream Name to Update: ");
   char name[50];
   scanf("%s", name);
   for(int i=0; i<size; i++) {
      if(strcmp(icecream[i].name, name) == 0) {
         printf("Enter Ice Cream Price: $");
         scanf("%f", &icecream[i].price);
         printf("Enter Ice Cream Quantity: ");
         scanf("%d", &icecream[i].quantity);
         printf("Record Updated Successfully!\n");
         return;
      }
   }
   printf("Ice Cream Not Found!\n");
}

void searchIceCream(struct IceCream icecream[], int size) {
   printf("\n-----------------------\n");
   printf("Search Ice Cream\n");
   printf("-----------------------\n");
   printf("Enter Ice Cream Name to Search: ");
   char name[50];
   scanf("%s", name);
   for(int i=0; i<size; i++) {
      if(strcmp(icecream[i].name, name) == 0) {
         printf("Ice Cream Found!\n");
         printf("Name\t\tPrice\t\tQuantity\n");
      }
         printf("----------------");
   }
}