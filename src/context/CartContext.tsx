import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export interface CartItem {
  cartItemId: string;
  cakeId: string;
  name: string;
  category: string;
  image: string;
  size: string;
  unitPrice: number;
  quantity: number;
}

interface AddToCartItem {
  cakeId: string;
  name: string;
  category: string;
  image: string;
  size: string;
  unitPrice: number;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  cartCount: number;
  cartTotal: number;
  addItem: (item: AddToCartItem) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  removeItem: (cartItemId: string) => void;
  clearCart: () => void;
}

const CART_STORAGE_KEY = "creme_and_crumb_cart";

const CartContext = createContext<CartContextValue | undefined>(
  undefined
);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);

      if (!storedCart) {
        return [];
      }

      const parsedCart: unknown = JSON.parse(storedCart);

      if (!Array.isArray(parsedCart)) {
        return [];
      }

      return parsedCart as CartItem[];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(items)
    );
  }, [items]);

  const addItem = (item: AddToCartItem) => {
    setItems((currentItems) => {
      const cartItemId = `${item.cakeId}-${item.size}`;

      const existingItem = currentItems.find(
        (cartItem) => cartItem.cartItemId === cartItemId
      );

      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.cartItemId === cartItemId
            ? {
                ...cartItem,
                quantity: Math.min(
                  10,
                  cartItem.quantity + item.quantity
                ),
              }
            : cartItem
        );
      }

      return [
        ...currentItems,
        {
          cartItemId,
          ...item,
        },
      ];
    });
  };

  const updateQuantity = (
    cartItemId: string,
    quantity: number
  ) => {
    if (quantity <= 0) {
      removeItem(cartItemId);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.cartItemId === cartItemId
          ? {
              ...item,
              quantity: Math.min(10, quantity),
            }
          : item
      )
    );
  };

  const removeItem = (cartItemId: string) => {
    setItems((currentItems) =>
      currentItems.filter(
        (item) => item.cartItemId !== cartItemId
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartCount = useMemo(
    () =>
      items.reduce(
        (total, item) => total + item.quantity,
        0
      ),
    [items]
  );

  const cartTotal = useMemo(
    () =>
      items.reduce(
        (total, item) =>
          total + item.unitPrice * item.quantity,
        0
      ),
    [items]
  );

  const value: CartContextValue = {
    items,
    cartCount,
    cartTotal,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside a CartProvider"
    );
  }

  return context;
}